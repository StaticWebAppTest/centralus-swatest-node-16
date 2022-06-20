module.exports = async function (context, req) {
  const date = "2022-06-20T19:07:52.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

