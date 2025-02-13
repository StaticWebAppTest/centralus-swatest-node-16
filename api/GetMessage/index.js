module.exports = async function (context, req) {
  const date = "2025-02-13T19:09:15.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

