module.exports = async function (context, req) {
  const date = "2024-12-18T20:13:39.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

