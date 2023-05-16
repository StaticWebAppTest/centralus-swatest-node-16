module.exports = async function (context, req) {
  const date = "2023-05-16T13:12:34.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

