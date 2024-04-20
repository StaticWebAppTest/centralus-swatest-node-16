module.exports = async function (context, req) {
  const date = "2024-04-20T18:12:12.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

