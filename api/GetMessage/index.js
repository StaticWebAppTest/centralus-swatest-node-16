module.exports = async function (context, req) {
  const date = "2023-11-06T19:07:12.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

