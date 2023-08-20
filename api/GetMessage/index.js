module.exports = async function (context, req) {
  const date = "2023-08-20T23:07:27.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

