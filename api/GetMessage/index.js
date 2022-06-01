module.exports = async function (context, req) {
  const date = "2022-06-01T13:42:51.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

