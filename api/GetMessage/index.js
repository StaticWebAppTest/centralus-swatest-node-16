module.exports = async function (context, req) {
  const date = "2022-11-26T13:17:06.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

