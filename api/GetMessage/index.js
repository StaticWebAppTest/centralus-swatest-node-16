module.exports = async function (context, req) {
  const date = "2022-05-27T17:17:04.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

