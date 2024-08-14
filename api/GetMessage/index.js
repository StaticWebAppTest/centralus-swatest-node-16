module.exports = async function (context, req) {
  const date = "2024-08-14T21:10:02.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

