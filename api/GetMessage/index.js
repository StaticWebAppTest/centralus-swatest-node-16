module.exports = async function (context, req) {
  const date = "2022-08-31T10:12:04.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

