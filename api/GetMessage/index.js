module.exports = async function (context, req) {
  const date = "2024-04-21T23:09:29.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

