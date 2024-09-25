module.exports = async function (context, req) {
  const date = "2024-09-25T20:12:58.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

