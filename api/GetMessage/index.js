module.exports = async function (context, req) {
  const date = "2024-11-12T20:12:29.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

