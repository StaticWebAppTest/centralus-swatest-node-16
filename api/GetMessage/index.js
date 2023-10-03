module.exports = async function (context, req) {
  const date = "2023-10-03T12:17:06.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

