module.exports = async function (context, req) {
  const date = "2024-05-17T17:08:50.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

