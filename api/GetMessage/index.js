module.exports = async function (context, req) {
  const date = "2022-09-22T01:07:31.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

