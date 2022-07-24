module.exports = async function (context, req) {
  const date = "2022-07-24T23:10:29.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

