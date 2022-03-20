module.exports = async function (context, req) {
  const date = "2022-03-20T19:07:57.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

