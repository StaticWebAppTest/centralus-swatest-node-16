module.exports = async function (context, req) {
  const date = "2022-11-16T22:10:21.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

