module.exports = async function (context, req) {
  const date = "2024-05-25T14:08:10.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

