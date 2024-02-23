module.exports = async function (context, req) {
  const date = "2024-02-23T22:08:09.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

