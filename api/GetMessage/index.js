module.exports = async function (context, req) {
  const date = "2022-03-20T16:12:30.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

