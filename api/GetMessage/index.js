module.exports = async function (context, req) {
  const date = "2025-05-23T09:14:03.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

