module.exports = async function (context, req) {
  const date = "2023-05-03T11:07:12.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

