module.exports = async function (context, req) {
  const date = "2024-01-17T15:09:32.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

