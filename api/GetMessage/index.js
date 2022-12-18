module.exports = async function (context, req) {
  const date = "2022-12-18T19:06:40.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

