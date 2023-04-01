module.exports = async function (context, req) {
  const date = "2023-04-01T23:08:06.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

