module.exports = async function (context, req) {
  const date = "2024-07-21T20:12:46.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

