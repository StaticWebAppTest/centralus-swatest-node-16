module.exports = async function (context, req) {
  const date = "2023-06-06T08:11:17.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

