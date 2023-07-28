module.exports = async function (context, req) {
  const date = "2023-07-28T03:09:52.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

