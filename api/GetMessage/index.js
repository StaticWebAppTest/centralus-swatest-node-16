module.exports = async function (context, req) {
  const date = "2024-01-10T21:08:15.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

