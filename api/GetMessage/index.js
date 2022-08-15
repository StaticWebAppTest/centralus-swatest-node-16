module.exports = async function (context, req) {
  const date = "2022-08-15T08:14:00.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

