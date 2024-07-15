module.exports = async function (context, req) {
  const date = "2024-07-15T20:10:53.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

