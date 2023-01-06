module.exports = async function (context, req) {
  const date = "2023-01-06T17:09:08.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

