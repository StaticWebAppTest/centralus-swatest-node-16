module.exports = async function (context, req) {
  const date = "2022-11-15T19:08:36.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

