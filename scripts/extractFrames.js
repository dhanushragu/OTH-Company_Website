import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import { promisify } from 'util';
import ffmpegStatic from 'ffmpeg-static';

const execFileAsync = promisify(execFile);
const FFMPEG_BIN = ffmpegStatic || 'ffmpeg';

export async function extractFrames(
  videoPath = 'public/videos/herosection.mp4',
  outputDir = 'public/images/herosection-frames',
  totalFrames = 200
) {
  const resolvedVideo = path.resolve(process.cwd(), videoPath);
  const resolvedOutDir = path.resolve(process.cwd(), outputDir);

  if (!fs.existsSync(resolvedVideo)) {
    console.error(`❌ Error: Video file not found at: ${resolvedVideo}`);
    process.exit(1);
  }

  if (!fs.existsSync(resolvedOutDir)) {
    fs.mkdirSync(resolvedOutDir, { recursive: true });
    console.log(`📁 Created output directory: ${resolvedOutDir}`);
  }

  console.log(`\n========================================`);
  console.log(`🎬 VIDEO FRAME EXTRACTOR (Node.js)`);
  console.log(`========================================`);
  console.log(`📹 Video Source:   ${resolvedVideo}`);
  console.log(`📁 Output Folder:  ${resolvedOutDir}`);
  console.log(`🎞️  Target Frames:  ${totalFrames} high-quality PNG images`);
  console.log(`⚙️  FFmpeg Engine:  ${FFMPEG_BIN}\n`);

  console.log(`⏳ Probing video details...`);
  let duration = 8.0;

  try {
    const { stderr } = await execFileAsync(FFMPEG_BIN, ['-i', resolvedVideo]);
    const durationMatch = stderr.match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/);
    if (durationMatch) {
      const hours = parseFloat(durationMatch[1]);
      const minutes = parseFloat(durationMatch[2]);
      const seconds = parseFloat(durationMatch[3]);
      duration = hours * 3600 + minutes * 60 + seconds;
      console.log(`⏱️  Detected Video Duration: ${duration.toFixed(2)}s`);
    }
  } catch (err) {
    if (err.stderr) {
      const durationMatch = err.stderr.match(/Duration:\s*(\d+):(\d+):(\d+\.\d+)/);
      if (durationMatch) {
        const hours = parseFloat(durationMatch[1]);
        const minutes = parseFloat(durationMatch[2]);
        const seconds = parseFloat(durationMatch[3]);
        duration = hours * 3600 + minutes * 60 + seconds;
        console.log(`⏱️  Detected Video Duration: ${duration.toFixed(2)}s`);
      }
    }
  }

  const targetFps = (totalFrames / duration).toFixed(4);
  const outputPattern = path.join(resolvedOutDir, 'frame_%04d.png');

  console.log(`🚀 Extracting ${totalFrames} frames (~${targetFps} fps)... Please wait.`);

  const args = [
    '-y',
    '-i', resolvedVideo,
    '-vf', `fps=${targetFps}`,
    '-vframes', String(totalFrames),
    '-compression_level', '3',
    outputPattern
  ];

  const startTime = Date.now();
  await execFileAsync(FFMPEG_BIN, args);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);

  const files = fs.readdirSync(resolvedOutDir).filter(f => f.endsWith('.png'));

  console.log(`\n========================================`);
  console.log(`✅ EXTRACTION COMPLETE!`);
  console.log(`========================================`);
  console.log(`🎉 Total frames saved: ${files.length} frames`);
  console.log(`⏱️  Time elapsed:       ${elapsed}s`);
  console.log(`📂 Location:           ${resolvedOutDir}`);
  console.log(`📝 File naming:        frame_0001.png to frame_${String(files.length).padStart(4, '0')}.png\n`);

  return { success: true, count: files.length, outputDir: resolvedOutDir };
}

const args = process.argv.slice(2);
const videoArg = args[0] || 'public/videos/herosection.mp4';
const outDirArg = args[1] || 'public/images/herosection-frames';
const framesArg = parseInt(args[2], 10) || 200;

extractFrames(videoArg, outDirArg, framesArg).catch((err) => {
  console.error('\n❌ Extraction failed:', err.message);
  process.exit(1);
});
