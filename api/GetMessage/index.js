module.exports = async function (context, req) {
  const date = "2023-10-13T03:09:42.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

