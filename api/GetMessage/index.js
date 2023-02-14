module.exports = async function (context, req) {
  const date = "2023-02-14T17:09:24.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

