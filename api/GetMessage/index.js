module.exports = async function (context, req) {
  const date = "2023-05-24T08:11:29.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

