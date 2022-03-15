module.exports = async function (context, req) {
  const date = "2022-03-15T19:09:49.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

