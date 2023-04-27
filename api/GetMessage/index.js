module.exports = async function (context, req) {
  const date = "2023-04-27T12:16:10.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

