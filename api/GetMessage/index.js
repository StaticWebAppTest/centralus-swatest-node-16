module.exports = async function (context, req) {
  const date = "2022-12-01T07:09:53.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

