module.exports = async function (context, req) {
  const date = "2023-03-01T06:13:59.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

