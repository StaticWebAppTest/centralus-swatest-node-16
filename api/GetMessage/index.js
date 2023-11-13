module.exports = async function (context, req) {
  const date = "2023-11-13T15:09:32.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

