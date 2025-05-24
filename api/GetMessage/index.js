module.exports = async function (context, req) {
  const date = "2025-05-24T13:22:04.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

