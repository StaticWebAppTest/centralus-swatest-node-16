module.exports = async function (context, req) {
  const date = "2023-08-31T15:08:52.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

