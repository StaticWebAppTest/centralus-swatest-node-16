module.exports = async function (context, req) {
  const date = "2024-11-06T13:18:56.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

