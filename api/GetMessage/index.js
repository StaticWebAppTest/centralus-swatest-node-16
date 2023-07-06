module.exports = async function (context, req) {
  const date = "2023-07-06T20:10:29.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

