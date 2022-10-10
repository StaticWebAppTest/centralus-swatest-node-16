module.exports = async function (context, req) {
  const date = "2022-10-10T22:14:00.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

