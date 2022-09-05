module.exports = async function (context, req) {
  const date = "2022-09-05T12:22:01.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

