module.exports = async function (context, req) {
  const date = "2023-07-30T03:08:42.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

