module.exports = async function (context, req) {
  const date = "2024-11-10T12:19:51.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

