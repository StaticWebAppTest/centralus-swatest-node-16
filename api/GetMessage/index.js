module.exports = async function (context, req) {
  const date = "2023-12-22T23:09:30.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

