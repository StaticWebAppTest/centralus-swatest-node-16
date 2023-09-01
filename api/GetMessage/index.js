module.exports = async function (context, req) {
  const date = "2023-09-01T10:09:24.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

