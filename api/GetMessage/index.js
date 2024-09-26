module.exports = async function (context, req) {
  const date = "2024-09-26T05:12:03.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

