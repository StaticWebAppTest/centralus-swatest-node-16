module.exports = async function (context, req) {
  const date = "2023-09-05T17:08:01.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

