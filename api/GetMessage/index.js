module.exports = async function (context, req) {
  const date = "2024-03-06T12:17:13.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

