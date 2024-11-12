module.exports = async function (context, req) {
  const date = "2024-11-12T06:16:33.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

