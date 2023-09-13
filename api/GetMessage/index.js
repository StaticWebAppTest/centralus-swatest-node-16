module.exports = async function (context, req) {
  const date = "2023-09-13T06:11:43.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

