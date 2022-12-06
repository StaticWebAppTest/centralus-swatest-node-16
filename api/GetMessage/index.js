module.exports = async function (context, req) {
  const date = "2022-12-06T13:20:01.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

