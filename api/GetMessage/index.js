module.exports = async function (context, req) {
  const date = "2024-07-18T11:09:25.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

