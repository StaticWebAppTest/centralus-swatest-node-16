module.exports = async function (context, req) {
  const date = "2024-11-27T05:12:21.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

