module.exports = async function (context, req) {
  const date = "2025-11-30T18:18:46.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

