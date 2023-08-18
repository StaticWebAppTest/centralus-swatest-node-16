module.exports = async function (context, req) {
  const date = "2023-08-18T17:07:28.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

