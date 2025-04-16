module.exports = async function (context, req) {
  const date = "2025-04-16T16:16:30.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

