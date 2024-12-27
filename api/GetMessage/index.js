module.exports = async function (context, req) {
  const date = "2024-12-27T20:12:18.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

