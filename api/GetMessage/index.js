module.exports = async function (context, req) {
  const date = "2024-12-11T21:11:33.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

