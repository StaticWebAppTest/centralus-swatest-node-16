module.exports = async function (context, req) {
  const date = "2024-04-30T21:10:09.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

