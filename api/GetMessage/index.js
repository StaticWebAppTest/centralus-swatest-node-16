module.exports = async function (context, req) {
  const date = "2024-05-10T06:12:52.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

