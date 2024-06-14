module.exports = async function (context, req) {
  const date = "2024-06-14T08:12:53.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

