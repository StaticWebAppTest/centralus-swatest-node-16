module.exports = async function (context, req) {
  const date = "2022-06-14T08:14:34.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

