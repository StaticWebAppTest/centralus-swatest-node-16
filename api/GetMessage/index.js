module.exports = async function (context, req) {
  const date = "2024-07-11T19:08:59.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

