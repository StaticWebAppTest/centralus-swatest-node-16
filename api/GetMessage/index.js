module.exports = async function (context, req) {
  const date = "2023-04-28T21:07:28.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

