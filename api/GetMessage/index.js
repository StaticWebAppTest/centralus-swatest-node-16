module.exports = async function (context, req) {
  const date = "2024-08-13T02:03:40.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

