module.exports = async function (context, req) {
  const date = "2023-03-12T13:13:21.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

