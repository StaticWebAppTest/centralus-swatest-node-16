module.exports = async function (context, req) {
  const date = "2022-10-20T08:17:48.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

