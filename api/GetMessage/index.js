module.exports = async function (context, req) {
  const date = "2024-06-24T12:19:21.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

