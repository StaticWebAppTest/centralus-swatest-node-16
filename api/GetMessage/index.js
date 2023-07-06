module.exports = async function (context, req) {
  const date = "2023-07-06T13:22:36.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

