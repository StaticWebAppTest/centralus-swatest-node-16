module.exports = async function (context, req) {
  const date = "2024-07-13T07:09:57.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

