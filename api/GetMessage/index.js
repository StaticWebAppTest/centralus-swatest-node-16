module.exports = async function (context, req) {
  const date = "2022-06-18T23:09:30.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

