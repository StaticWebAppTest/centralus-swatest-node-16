module.exports = async function (context, req) {
  const date = "2023-08-31T11:06:58.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

