module.exports = async function (context, req) {
  const date = "2024-03-27T06:11:59.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

