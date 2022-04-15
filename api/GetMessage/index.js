module.exports = async function (context, req) {
  const date = "2022-04-15T03:59:14.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

