module.exports = async function (context, req) {
  const date = "2023-08-21T17:07:30.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

