module.exports = async function (context, req) {
  const date = "2024-02-06T14:08:02.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

