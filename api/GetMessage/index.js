module.exports = async function (context, req) {
  const date = "2023-12-06T13:12:26.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

