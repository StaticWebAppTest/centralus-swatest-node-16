module.exports = async function (context, req) {
  const date = "2024-12-26T11:09:40.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

