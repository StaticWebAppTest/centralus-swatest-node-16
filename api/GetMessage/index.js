module.exports = async function (context, req) {
  const date = "2022-09-26T15:14:36.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

