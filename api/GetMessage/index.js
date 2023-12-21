module.exports = async function (context, req) {
  const date = "2023-12-21T00:42:53.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

