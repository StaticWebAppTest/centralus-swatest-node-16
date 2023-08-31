module.exports = async function (context, req) {
  const date = "2023-08-31T19:06:06.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

