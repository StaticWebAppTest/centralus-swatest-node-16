module.exports = async function (context, req) {
  const date = "2024-11-18T12:24:33.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

