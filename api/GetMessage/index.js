module.exports = async function (context, req) {
  const date = "2024-01-08T03:10:12.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

