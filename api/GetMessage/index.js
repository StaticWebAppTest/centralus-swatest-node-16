module.exports = async function (context, req) {
  const date = "2023-10-07T12:15:04.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

