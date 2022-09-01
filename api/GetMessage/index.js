module.exports = async function (context, req) {
  const date = "2022-09-01T08:16:34.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

