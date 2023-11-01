module.exports = async function (context, req) {
  const date = "2023-11-01T11:07:17.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

