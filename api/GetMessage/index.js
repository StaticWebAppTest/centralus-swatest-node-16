module.exports = async function (context, req) {
  const date = "2023-07-31T19:07:07.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

