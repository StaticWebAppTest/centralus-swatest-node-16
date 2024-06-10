module.exports = async function (context, req) {
  const date = "2024-06-10T08:13:59.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

