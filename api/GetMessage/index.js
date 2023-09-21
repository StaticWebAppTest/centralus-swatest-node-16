module.exports = async function (context, req) {
  const date = "2023-09-21T00:40:13.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

