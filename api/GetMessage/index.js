module.exports = async function (context, req) {
  const date = "2023-08-22T12:16:04.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

