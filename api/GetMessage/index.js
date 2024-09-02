module.exports = async function (context, req) {
  const date = "2024-09-02T06:16:37.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

