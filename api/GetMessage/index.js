module.exports = async function (context, req) {
  const date = "2023-01-06T13:16:15.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

