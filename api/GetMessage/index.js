module.exports = async function (context, req) {
  const date = "2024-06-10T19:08:42.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

