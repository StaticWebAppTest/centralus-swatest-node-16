module.exports = async function (context, req) {
  const date = "2022-04-20T18:12:26.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

