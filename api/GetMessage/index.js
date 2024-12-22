module.exports = async function (context, req) {
  const date = "2024-12-22T11:08:30.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

