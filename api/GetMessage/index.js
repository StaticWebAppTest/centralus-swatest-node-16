module.exports = async function (context, req) {
  const date = "2024-07-28T00:54:02.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

