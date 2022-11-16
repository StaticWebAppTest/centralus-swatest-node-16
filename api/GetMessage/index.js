module.exports = async function (context, req) {
  const date = "2022-11-16T04:17:28.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

