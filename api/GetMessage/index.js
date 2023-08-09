module.exports = async function (context, req) {
  const date = "2023-08-09T17:08:15.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

