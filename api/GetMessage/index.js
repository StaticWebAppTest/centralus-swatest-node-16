module.exports = async function (context, req) {
  const date = "2024-11-01T21:10:45.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

