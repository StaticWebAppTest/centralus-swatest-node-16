module.exports = async function (context, req) {
  const date = "2023-12-08T10:09:59.020Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

