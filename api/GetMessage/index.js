module.exports = async function (context, req) {
  const date = "2024-02-27T06:11:36.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

