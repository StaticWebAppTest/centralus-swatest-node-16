module.exports = async function (context, req) {
  const date = "2022-09-24T10:12:21.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

