module.exports = async function (context, req) {
  const date = "2023-09-27T22:07:54.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

