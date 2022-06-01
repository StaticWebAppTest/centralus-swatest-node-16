module.exports = async function (context, req) {
  const date = "2022-06-01T19:09:06.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

