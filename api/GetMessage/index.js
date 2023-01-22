module.exports = async function (context, req) {
  const date = "2023-01-22T23:09:00.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

