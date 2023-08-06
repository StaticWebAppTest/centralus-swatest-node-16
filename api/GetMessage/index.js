module.exports = async function (context, req) {
  const date = "2023-08-06T01:48:36.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

