module.exports = async function (context, req) {
  const date = "2023-02-16T06:13:05.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

