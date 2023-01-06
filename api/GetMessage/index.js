module.exports = async function (context, req) {
  const date = "2023-01-06T10:10:13.704Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

