module.exports = async function (context, req) {
  const date = "2023-03-02T17:09:21.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

