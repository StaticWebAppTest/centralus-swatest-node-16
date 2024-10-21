module.exports = async function (context, req) {
  const date = "2024-10-21T17:10:45.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

