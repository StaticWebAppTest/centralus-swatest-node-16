module.exports = async function (context, req) {
  const date = "2024-05-03T02:22:40.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

