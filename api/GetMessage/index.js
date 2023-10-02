module.exports = async function (context, req) {
  const date = "2023-10-02T20:09:30.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

