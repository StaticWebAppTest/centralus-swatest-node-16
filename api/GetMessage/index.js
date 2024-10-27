module.exports = async function (context, req) {
  const date = "2024-10-27T13:16:37.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

