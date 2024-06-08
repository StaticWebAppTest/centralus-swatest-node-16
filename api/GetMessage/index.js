module.exports = async function (context, req) {
  const date = "2024-06-08T16:13:06.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

