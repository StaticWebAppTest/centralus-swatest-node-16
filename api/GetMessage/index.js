module.exports = async function (context, req) {
  const date = "2024-05-28T12:18:14.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

