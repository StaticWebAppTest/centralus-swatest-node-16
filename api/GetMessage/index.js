module.exports = async function (context, req) {
  const date = "2024-05-04T12:15:20.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

