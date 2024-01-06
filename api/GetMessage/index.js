module.exports = async function (context, req) {
  const date = "2024-01-06T09:08:18.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

