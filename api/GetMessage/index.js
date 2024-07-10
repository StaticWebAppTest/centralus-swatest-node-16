module.exports = async function (context, req) {
  const date = "2024-07-10T03:12:28.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

