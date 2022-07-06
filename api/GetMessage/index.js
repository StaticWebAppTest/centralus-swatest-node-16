module.exports = async function (context, req) {
  const date = "2022-07-06T07:09:53.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

