module.exports = async function (context, req) {
  const date = "2022-05-06T16:14:53.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

