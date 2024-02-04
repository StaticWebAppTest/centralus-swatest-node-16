module.exports = async function (context, req) {
  const date = "2024-02-04T23:08:23.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

