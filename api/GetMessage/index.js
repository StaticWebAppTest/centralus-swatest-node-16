module.exports = async function (context, req) {
  const date = "2024-07-01T11:08:52.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

