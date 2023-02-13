module.exports = async function (context, req) {
  const date = "2023-02-13T21:08:57.587Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

