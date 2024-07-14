module.exports = async function (context, req) {
  const date = "2024-07-14T12:28:35.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

