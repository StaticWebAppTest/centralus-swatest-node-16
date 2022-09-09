module.exports = async function (context, req) {
  const date = "2022-09-09T13:41:59.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

