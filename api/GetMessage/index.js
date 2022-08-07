module.exports = async function (context, req) {
  const date = "2022-08-07T08:12:59.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

