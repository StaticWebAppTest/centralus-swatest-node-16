module.exports = async function (context, req) {
  const date = "2023-07-16T03:04:57.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

