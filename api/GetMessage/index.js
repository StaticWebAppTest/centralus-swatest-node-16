module.exports = async function (context, req) {
  const date = "2022-03-24T12:18:49.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

