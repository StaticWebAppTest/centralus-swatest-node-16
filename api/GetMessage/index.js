module.exports = async function (context, req) {
  const date = "2023-04-04T23:08:15.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

