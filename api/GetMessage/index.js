module.exports = async function (context, req) {
  const date = "2023-12-15T12:17:07.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

