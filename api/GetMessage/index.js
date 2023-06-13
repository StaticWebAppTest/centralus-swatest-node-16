module.exports = async function (context, req) {
  const date = "2023-06-13T18:10:50.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

