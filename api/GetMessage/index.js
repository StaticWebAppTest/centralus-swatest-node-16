module.exports = async function (context, req) {
  const date = "2023-05-19T13:10:30.879Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

