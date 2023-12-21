module.exports = async function (context, req) {
  const date = "2023-12-21T20:09:25.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

