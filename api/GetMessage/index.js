module.exports = async function (context, req) {
  const date = "2023-11-08T14:08:31.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

