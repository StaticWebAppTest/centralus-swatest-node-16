module.exports = async function (context, req) {
  const date = "2022-05-20T16:15:37.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

