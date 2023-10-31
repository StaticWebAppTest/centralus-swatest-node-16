module.exports = async function (context, req) {
  const date = "2023-10-31T21:07:26.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

