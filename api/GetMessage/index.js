module.exports = async function (context, req) {
  const date = "2025-04-17T19:10:20.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

