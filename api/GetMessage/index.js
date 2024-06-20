module.exports = async function (context, req) {
  const date = "2024-06-20T21:10:51.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

