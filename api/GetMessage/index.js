module.exports = async function (context, req) {
  const date = "2023-07-26T05:07:57.778Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

