module.exports = async function (context, req) {
  const date = "2025-02-27T04:14:53.174Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

