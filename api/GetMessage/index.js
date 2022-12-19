module.exports = async function (context, req) {
  const date = "2022-12-19T03:10:17.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

