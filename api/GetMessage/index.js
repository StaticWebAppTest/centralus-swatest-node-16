module.exports = async function (context, req) {
  const date = "2024-07-23T12:19:32.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

