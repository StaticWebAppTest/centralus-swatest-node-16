module.exports = async function (context, req) {
  const date = "2022-09-20T17:21:57.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

