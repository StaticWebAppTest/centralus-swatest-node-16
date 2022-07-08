module.exports = async function (context, req) {
  const date = "2022-07-08T22:09:50.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

