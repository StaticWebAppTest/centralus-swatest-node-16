module.exports = async function (context, req) {
  const date = "2023-01-16T15:10:19.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

