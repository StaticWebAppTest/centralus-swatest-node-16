module.exports = async function (context, req) {
  const date = "2025-03-03T07:12:54.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

