module.exports = async function (context, req) {
  const date = "2024-08-16T21:10:31.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

