module.exports = async function (context, req) {
  const date = "2023-03-10T06:13:48.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

