module.exports = async function (context, req) {
  const date = "2023-09-13T01:42:47.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

