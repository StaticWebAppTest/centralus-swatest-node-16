module.exports = async function (context, req) {
  const date = "2022-06-01T22:12:01.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

