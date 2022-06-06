module.exports = async function (context, req) {
  const date = "2022-06-06T16:14:11.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

