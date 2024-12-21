module.exports = async function (context, req) {
  const date = "2024-12-21T20:11:40.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

