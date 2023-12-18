module.exports = async function (context, req) {
  const date = "2023-12-18T04:12:06.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

