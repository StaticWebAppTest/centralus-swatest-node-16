module.exports = async function (context, req) {
  const date = "2022-06-03T20:11:19.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

