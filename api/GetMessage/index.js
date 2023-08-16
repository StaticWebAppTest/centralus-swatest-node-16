module.exports = async function (context, req) {
  const date = "2023-08-16T09:08:30.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

