module.exports = async function (context, req) {
  const date = "2022-06-01T14:18:51.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

