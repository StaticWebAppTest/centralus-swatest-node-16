module.exports = async function (context, req) {
  const date = "2022-03-08T13:16:47.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

