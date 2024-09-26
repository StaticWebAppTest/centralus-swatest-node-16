module.exports = async function (context, req) {
  const date = "2024-09-26T06:16:45.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

