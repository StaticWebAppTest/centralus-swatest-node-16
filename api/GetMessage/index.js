module.exports = async function (context, req) {
  const date = "2022-11-24T08:13:33.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

