module.exports = async function (context, req) {
  const date = "2024-05-20T12:19:51.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

