module.exports = async function (context, req) {
  const date = "2024-11-28T23:12:02.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

