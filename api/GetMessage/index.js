module.exports = async function (context, req) {
  const date = "2022-09-05T04:12:31.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

