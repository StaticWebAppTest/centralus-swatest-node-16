module.exports = async function (context, req) {
  const date = "2023-08-06T19:06:11.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

