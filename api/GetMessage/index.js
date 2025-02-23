module.exports = async function (context, req) {
  const date = "2025-02-23T04:13:37.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

