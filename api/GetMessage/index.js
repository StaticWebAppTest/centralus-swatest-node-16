module.exports = async function (context, req) {
  const date = "2022-11-01T08:16:25.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

