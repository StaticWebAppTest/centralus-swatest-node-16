module.exports = async function (context, req) {
  const date = "2024-01-17T13:12:20.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

