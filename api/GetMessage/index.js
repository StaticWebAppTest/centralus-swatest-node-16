module.exports = async function (context, req) {
  const date = "2024-12-19T19:09:23.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

