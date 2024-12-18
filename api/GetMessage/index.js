module.exports = async function (context, req) {
  const date = "2024-12-18T15:12:44.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

