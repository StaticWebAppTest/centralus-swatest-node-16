module.exports = async function (context, req) {
  const date = "2022-12-03T13:13:40.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

