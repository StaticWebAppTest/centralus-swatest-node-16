module.exports = async function (context, req) {
  const date = "2023-02-13T17:09:22.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

