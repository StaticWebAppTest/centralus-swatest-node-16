module.exports = async function (context, req) {
  const date = "2022-07-13T06:14:39.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

