module.exports = async function (context, req) {
  const date = "2024-04-23T23:09:14.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

