module.exports = async function (context, req) {
  const date = "2022-09-15T06:41:21.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

