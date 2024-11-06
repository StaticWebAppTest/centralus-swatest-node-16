module.exports = async function (context, req) {
  const date = "2024-11-06T19:09:25.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

