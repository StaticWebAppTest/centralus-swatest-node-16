module.exports = async function (context, req) {
  const date = "2024-06-13T12:18:57.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

