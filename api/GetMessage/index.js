module.exports = async function (context, req) {
  const date = "2024-04-18T08:12:51.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

