module.exports = async function (context, req) {
  const date = "2025-12-23T06:24:02.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

