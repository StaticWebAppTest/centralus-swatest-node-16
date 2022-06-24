module.exports = async function (context, req) {
  const date = "2022-06-24T15:12:51.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

