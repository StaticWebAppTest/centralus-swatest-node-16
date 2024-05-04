module.exports = async function (context, req) {
  const date = "2024-05-04T10:08:50.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

