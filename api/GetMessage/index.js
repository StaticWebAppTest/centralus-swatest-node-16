module.exports = async function (context, req) {
  const date = "2024-04-23T05:08:54.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

