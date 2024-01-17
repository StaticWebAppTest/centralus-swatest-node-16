module.exports = async function (context, req) {
  const date = "2024-01-17T17:08:39.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

