module.exports = async function (context, req) {
  const date = "2024-05-09T21:10:09.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

