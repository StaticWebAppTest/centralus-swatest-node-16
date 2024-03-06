module.exports = async function (context, req) {
  const date = "2024-03-06T13:08:59.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

