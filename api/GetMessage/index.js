module.exports = async function (context, req) {
  const date = "2024-04-18T16:11:05.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

