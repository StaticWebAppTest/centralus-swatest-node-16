module.exports = async function (context, req) {
  const date = "2024-05-02T17:09:13.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

