module.exports = async function (context, req) {
  const date = "2022-11-27T16:12:48.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

