module.exports = async function (context, req) {
  const date = "2022-08-21T09:10:26.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

