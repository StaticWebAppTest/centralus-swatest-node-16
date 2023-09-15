module.exports = async function (context, req) {
  const date = "2023-09-15T12:16:18.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

