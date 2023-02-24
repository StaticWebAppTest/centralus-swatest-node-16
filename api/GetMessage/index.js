module.exports = async function (context, req) {
  const date = "2023-02-24T11:08:51.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

