module.exports = async function (context, req) {
  const date = "2023-06-10T09:08:34.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

