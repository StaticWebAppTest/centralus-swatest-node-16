module.exports = async function (context, req) {
  const date = "2022-12-16T14:08:27.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

