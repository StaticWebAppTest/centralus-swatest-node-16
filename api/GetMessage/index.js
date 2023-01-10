module.exports = async function (context, req) {
  const date = "2023-01-10T10:10:12.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

