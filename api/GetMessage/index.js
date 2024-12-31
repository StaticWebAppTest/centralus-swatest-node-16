module.exports = async function (context, req) {
  const date = "2024-12-31T07:11:23.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

