module.exports = async function (context, req) {
  const date = "2022-11-21T06:14:31.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

