module.exports = async function (context, req) {
  const date = "2024-04-12T07:10:58.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

