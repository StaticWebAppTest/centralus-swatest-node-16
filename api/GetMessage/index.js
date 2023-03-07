module.exports = async function (context, req) {
  const date = "2023-03-07T08:13:52.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

