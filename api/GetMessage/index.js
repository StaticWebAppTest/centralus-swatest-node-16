module.exports = async function (context, req) {
  const date = "2024-12-11T19:10:06.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

