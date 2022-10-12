module.exports = async function (context, req) {
  const date = "2022-10-12T20:15:15.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

