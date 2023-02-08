module.exports = async function (context, req) {
  const date = "2023-02-08T13:18:27.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

