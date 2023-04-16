module.exports = async function (context, req) {
  const date = "2023-04-16T13:09:49.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

