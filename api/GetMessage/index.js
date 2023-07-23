module.exports = async function (context, req) {
  const date = "2023-07-23T11:06:41.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

