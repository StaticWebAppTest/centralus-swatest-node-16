module.exports = async function (context, req) {
  const date = "2022-04-01T17:14:59.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

