module.exports = async function (context, req) {
  const date = "2024-05-19T07:08:20.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

