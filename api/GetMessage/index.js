module.exports = async function (context, req) {
  const date = "2024-05-18T20:10:10.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

