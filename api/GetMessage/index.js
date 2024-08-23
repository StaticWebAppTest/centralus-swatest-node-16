module.exports = async function (context, req) {
  const date = "2024-08-23T06:14:46.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

