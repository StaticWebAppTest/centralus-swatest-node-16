module.exports = async function (context, req) {
  const date = "2023-11-16T22:08:40.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

