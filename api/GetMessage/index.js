module.exports = async function (context, req) {
  const date = "2024-08-16T09:12:44.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

