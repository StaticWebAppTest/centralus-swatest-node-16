module.exports = async function (context, req) {
  const date = "2024-08-18T23:11:44.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

