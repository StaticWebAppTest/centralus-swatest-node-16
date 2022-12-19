module.exports = async function (context, req) {
  const date = "2022-12-19T19:07:31.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

