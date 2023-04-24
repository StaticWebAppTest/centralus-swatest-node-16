module.exports = async function (context, req) {
  const date = "2023-04-24T18:11:35.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

