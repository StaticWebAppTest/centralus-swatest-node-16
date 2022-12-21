module.exports = async function (context, req) {
  const date = "2022-12-21T15:10:04.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

