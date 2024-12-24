module.exports = async function (context, req) {
  const date = "2024-12-24T05:11:33.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

