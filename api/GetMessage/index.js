module.exports = async function (context, req) {
  const date = "2023-05-16T12:18:13.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

