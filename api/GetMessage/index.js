module.exports = async function (context, req) {
  const date = "2023-02-26T08:12:04.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

