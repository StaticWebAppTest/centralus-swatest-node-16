module.exports = async function (context, req) {
  const date = "2023-02-10T06:13:11.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

