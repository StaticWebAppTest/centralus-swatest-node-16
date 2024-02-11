module.exports = async function (context, req) {
  const date = "2024-02-11T11:07:52.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

