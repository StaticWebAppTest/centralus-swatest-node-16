module.exports = async function (context, req) {
  const date = "2025-03-16T15:11:27.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

