module.exports = async function (context, req) {
  const date = "2023-08-26T13:08:46.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

