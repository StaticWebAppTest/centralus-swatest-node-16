module.exports = async function (context, req) {
  const date = "2022-04-15T12:17:31.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

