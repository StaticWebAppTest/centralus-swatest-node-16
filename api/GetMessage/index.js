module.exports = async function (context, req) {
  const date = "2023-09-01T21:07:31.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

