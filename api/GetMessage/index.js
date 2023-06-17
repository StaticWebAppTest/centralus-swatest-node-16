module.exports = async function (context, req) {
  const date = "2023-06-17T23:08:45.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

