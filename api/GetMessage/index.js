module.exports = async function (context, req) {
  const date = "2025-06-13T15:14:11.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

