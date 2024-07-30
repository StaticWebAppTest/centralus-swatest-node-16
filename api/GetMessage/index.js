module.exports = async function (context, req) {
  const date = "2024-07-30T13:13:48.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

