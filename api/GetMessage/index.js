module.exports = async function (context, req) {
  const date = "2024-04-16T23:10:03.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

