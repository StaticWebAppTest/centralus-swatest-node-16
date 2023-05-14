module.exports = async function (context, req) {
  const date = "2023-05-14T12:15:32.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

