module.exports = async function (context, req) {
  const date = "2022-08-19T19:08:24.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

