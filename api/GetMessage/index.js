module.exports = async function (context, req) {
  const date = "2024-09-02T15:11:31.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

