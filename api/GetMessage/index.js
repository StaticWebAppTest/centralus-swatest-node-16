module.exports = async function (context, req) {
  const date = "2023-12-01T23:08:55.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

