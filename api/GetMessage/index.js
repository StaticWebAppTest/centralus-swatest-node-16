module.exports = async function (context, req) {
  const date = "2024-07-01T15:10:47.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

