module.exports = async function (context, req) {
  const date = "2022-11-06T03:19:37.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

