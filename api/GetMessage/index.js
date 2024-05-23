module.exports = async function (context, req) {
  const date = "2024-05-23T17:10:26.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

