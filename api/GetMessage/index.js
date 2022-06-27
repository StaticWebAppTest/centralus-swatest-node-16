module.exports = async function (context, req) {
  const date = "2022-06-27T14:14:34.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

