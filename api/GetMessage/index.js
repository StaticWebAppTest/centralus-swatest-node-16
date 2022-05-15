module.exports = async function (context, req) {
  const date = "2022-05-15T10:12:39.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

