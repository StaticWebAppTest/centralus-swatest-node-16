module.exports = async function (context, req) {
  const date = "2022-06-18T00:56:46.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

