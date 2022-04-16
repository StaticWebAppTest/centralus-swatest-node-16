module.exports = async function (context, req) {
  const date = "2022-04-16T07:10:11.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

