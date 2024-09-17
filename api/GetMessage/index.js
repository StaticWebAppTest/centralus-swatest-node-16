module.exports = async function (context, req) {
  const date = "2024-09-17T17:10:26.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

