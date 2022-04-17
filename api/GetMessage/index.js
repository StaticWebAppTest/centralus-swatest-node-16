module.exports = async function (context, req) {
  const date = "2022-04-17T18:12:21.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

