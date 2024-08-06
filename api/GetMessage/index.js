module.exports = async function (context, req) {
  const date = "2024-08-06T12:19:53.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

