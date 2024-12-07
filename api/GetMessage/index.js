module.exports = async function (context, req) {
  const date = "2024-12-07T16:13:40.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

