module.exports = async function (context, req) {
  const date = "2024-01-04T23:09:26.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

