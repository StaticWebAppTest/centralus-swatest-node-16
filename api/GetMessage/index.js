module.exports = async function (context, req) {
  const date = "2024-07-10T15:11:47.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

