module.exports = async function (context, req) {
  const date = "2023-05-22T11:07:24.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

