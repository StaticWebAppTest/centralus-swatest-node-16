module.exports = async function (context, req) {
  const date = "2024-04-05T23:09:32.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

