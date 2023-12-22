module.exports = async function (context, req) {
  const date = "2023-12-22T19:07:00.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

