module.exports = async function (context, req) {
  const date = "2023-05-01T08:11:54.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

