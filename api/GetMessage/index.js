module.exports = async function (context, req) {
  const date = "2022-03-19T19:07:53.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

