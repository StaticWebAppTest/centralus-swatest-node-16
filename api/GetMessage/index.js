module.exports = async function (context, req) {
  const date = "2023-11-03T13:11:59.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

