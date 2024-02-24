module.exports = async function (context, req) {
  const date = "2024-02-24T19:06:42.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

