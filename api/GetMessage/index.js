module.exports = async function (context, req) {
  const date = "2024-04-15T04:25:41.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

