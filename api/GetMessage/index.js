module.exports = async function (context, req) {
  const date = "2024-08-14T02:02:27.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

