module.exports = async function (context, req) {
  const date = "2023-05-03T03:09:53.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

