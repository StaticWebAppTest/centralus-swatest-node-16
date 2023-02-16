module.exports = async function (context, req) {
  const date = "2023-02-16T19:07:06.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

