module.exports = async function (context, req) {
  const date = "2024-11-05T20:12:52.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

