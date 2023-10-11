module.exports = async function (context, req) {
  const date = "2023-10-11T19:07:16.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

