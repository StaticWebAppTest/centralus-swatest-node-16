module.exports = async function (context, req) {
  const date = "2024-08-06T13:14:40.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

