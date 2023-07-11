module.exports = async function (context, req) {
  const date = "2023-07-11T02:19:16.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

