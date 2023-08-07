module.exports = async function (context, req) {
  const date = "2023-08-07T22:07:50.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

