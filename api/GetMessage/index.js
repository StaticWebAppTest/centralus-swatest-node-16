module.exports = async function (context, req) {
  const date = "2023-05-01T02:02:19.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

