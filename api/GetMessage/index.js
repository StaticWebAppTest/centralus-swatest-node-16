module.exports = async function (context, req) {
  const date = "2023-11-24T08:11:39.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

