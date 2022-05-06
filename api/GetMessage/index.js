module.exports = async function (context, req) {
  const date = "2022-05-06T10:12:13.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

