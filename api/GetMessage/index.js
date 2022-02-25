module.exports = async function (context, req) {
  const date = "2022-02-25T17:10:48.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

