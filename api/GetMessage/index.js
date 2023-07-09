module.exports = async function (context, req) {
  const date = "2023-07-09T22:08:44.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

