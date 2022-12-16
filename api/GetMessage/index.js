module.exports = async function (context, req) {
  const date = "2022-12-16T13:13:38.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

