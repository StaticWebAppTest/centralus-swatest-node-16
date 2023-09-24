module.exports = async function (context, req) {
  const date = "2023-09-24T12:14:40.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

