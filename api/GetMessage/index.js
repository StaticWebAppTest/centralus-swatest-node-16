module.exports = async function (context, req) {
  const date = "2022-04-11T00:49:06.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

