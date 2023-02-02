module.exports = async function (context, req) {
  const date = "2023-02-02T17:08:53.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

