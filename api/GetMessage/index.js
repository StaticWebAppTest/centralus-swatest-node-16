module.exports = async function (context, req) {
  const date = "2022-12-04T13:14:51.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

