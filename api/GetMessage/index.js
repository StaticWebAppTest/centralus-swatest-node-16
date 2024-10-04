module.exports = async function (context, req) {
  const date = "2024-10-04T05:11:47.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

