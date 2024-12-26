module.exports = async function (context, req) {
  const date = "2024-12-26T05:11:40.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

