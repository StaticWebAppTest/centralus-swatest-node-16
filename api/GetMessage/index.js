module.exports = async function (context, req) {
  const date = "2024-12-13T19:10:01.952Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

