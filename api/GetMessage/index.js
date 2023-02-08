module.exports = async function (context, req) {
  const date = "2023-02-08T20:10:36.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

