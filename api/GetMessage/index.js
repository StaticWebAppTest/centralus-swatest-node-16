module.exports = async function (context, req) {
  const date = "2024-11-06T12:22:28.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

