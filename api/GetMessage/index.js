module.exports = async function (context, req) {
  const date = "2024-07-24T06:14:53.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

