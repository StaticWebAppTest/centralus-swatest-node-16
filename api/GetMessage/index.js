module.exports = async function (context, req) {
  const date = "2023-03-10T12:19:34.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

