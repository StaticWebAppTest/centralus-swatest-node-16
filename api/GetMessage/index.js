module.exports = async function (context, req) {
  const date = "2024-01-04T05:09:08.325Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

