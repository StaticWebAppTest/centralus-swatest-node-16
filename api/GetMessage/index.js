module.exports = async function (context, req) {
  const date = "2023-06-06T12:17:03.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

