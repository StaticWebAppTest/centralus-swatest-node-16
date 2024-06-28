module.exports = async function (context, req) {
  const date = "2024-06-28T19:07:42.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

