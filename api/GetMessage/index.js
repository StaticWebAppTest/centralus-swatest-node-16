module.exports = async function (context, req) {
  const date = "2022-06-03T08:12:48.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

