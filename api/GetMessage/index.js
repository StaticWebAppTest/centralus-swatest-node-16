module.exports = async function (context, req) {
  const date = "2023-04-25T19:07:07.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

