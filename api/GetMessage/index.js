module.exports = async function (context, req) {
  const date = "2023-09-03T21:06:50.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

