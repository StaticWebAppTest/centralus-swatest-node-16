module.exports = async function (context, req) {
  const date = "2024-03-13T07:08:21.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

