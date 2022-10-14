module.exports = async function (context, req) {
  const date = "2022-10-14T12:27:54.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

