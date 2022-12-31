module.exports = async function (context, req) {
  const date = "2022-12-31T14:07:24.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

