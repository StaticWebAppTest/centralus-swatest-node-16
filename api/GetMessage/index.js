module.exports = async function (context, req) {
  const date = "2022-06-05T13:17:43.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

