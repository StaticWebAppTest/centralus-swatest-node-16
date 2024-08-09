module.exports = async function (context, req) {
  const date = "2024-08-09T20:11:51.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

