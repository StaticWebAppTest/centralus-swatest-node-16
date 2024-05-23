module.exports = async function (context, req) {
  const date = "2024-05-23T10:11:47.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

