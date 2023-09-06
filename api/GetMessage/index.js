module.exports = async function (context, req) {
  const date = "2023-09-06T22:07:44.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

