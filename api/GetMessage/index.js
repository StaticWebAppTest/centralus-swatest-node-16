module.exports = async function (context, req) {
  const date = "2024-08-18T14:09:44.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

