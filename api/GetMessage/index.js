module.exports = async function (context, req) {
  const date = "2024-03-27T12:16:57.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

