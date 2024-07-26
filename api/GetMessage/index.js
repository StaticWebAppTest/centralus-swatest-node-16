module.exports = async function (context, req) {
  const date = "2024-07-26T23:10:24.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

