module.exports = async function (context, req) {
  const date = "2022-03-20T10:10:17.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

