module.exports = async function (context, req) {
  const date = "2024-07-27T22:09:21.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

