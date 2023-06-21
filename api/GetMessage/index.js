module.exports = async function (context, req) {
  const date = "2023-06-21T00:54:32.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

