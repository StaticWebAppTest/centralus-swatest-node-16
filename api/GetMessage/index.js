module.exports = async function (context, req) {
  const date = "2025-12-27T06:21:26.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

