module.exports = async function (context, req) {
  const date = "2024-12-28T22:10:13.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

