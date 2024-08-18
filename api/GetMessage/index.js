module.exports = async function (context, req) {
  const date = "2024-08-18T16:11:51.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

