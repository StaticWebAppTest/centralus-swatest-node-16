module.exports = async function (context, req) {
  const date = "2023-09-04T22:07:32.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

