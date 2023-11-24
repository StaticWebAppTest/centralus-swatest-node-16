module.exports = async function (context, req) {
  const date = "2023-11-24T04:11:10.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

