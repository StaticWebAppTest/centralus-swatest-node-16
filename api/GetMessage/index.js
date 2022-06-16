module.exports = async function (context, req) {
  const date = "2022-06-16T13:29:53.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

