module.exports = async function (context, req) {
  const date = "2022-07-16T04:22:10.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

