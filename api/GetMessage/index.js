module.exports = async function (context, req) {
  const date = "2023-08-04T09:08:55.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

