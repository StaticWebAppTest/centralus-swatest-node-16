module.exports = async function (context, req) {
  const date = "2022-07-07T18:13:41.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

