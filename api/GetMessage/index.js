module.exports = async function (context, req) {
  const date = "2023-06-08T05:08:36.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

