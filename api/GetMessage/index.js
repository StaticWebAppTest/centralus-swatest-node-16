module.exports = async function (context, req) {
  const date = "2023-08-24T03:09:07.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

