module.exports = async function (context, req) {
  const date = "2024-03-01T13:24:11.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

