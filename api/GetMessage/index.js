module.exports = async function (context, req) {
  const date = "2023-02-08T06:13:02.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

