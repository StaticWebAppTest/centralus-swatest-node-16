module.exports = async function (context, req) {
  const date = "2022-04-07T14:09:56.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

