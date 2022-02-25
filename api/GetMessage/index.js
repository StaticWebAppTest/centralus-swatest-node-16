module.exports = async function (context, req) {
  const date = "2022-02-25T00:41:01.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

