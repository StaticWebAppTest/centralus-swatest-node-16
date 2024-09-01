module.exports = async function (context, req) {
  const date = "2024-09-01T11:09:47.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

