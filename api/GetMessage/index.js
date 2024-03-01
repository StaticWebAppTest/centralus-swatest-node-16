module.exports = async function (context, req) {
  const date = "2024-03-01T23:08:17.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

