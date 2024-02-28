module.exports = async function (context, req) {
  const date = "2024-02-28T00:40:26.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

