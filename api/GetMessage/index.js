module.exports = async function (context, req) {
  const date = "2024-05-07T19:07:55.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

