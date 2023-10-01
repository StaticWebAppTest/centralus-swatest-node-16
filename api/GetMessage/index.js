module.exports = async function (context, req) {
  const date = "2023-10-01T03:09:22.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

