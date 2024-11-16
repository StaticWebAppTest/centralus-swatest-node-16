module.exports = async function (context, req) {
  const date = "2024-11-16T11:09:13.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

