module.exports = async function (context, req) {
  const date = "2023-04-05T23:07:17.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

