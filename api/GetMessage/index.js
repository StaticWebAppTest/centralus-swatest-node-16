module.exports = async function (context, req) {
  const date = "2022-12-27T12:16:57.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

