module.exports = async function (context, req) {
  const date = "2024-08-10T06:13:51.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

