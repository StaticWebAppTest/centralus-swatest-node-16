module.exports = async function (context, req) {
  const date = "2024-08-22T11:09:31.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

