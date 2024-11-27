module.exports = async function (context, req) {
  const date = "2024-11-27T17:11:02.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

