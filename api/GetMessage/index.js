module.exports = async function (context, req) {
  const date = "2024-12-17T17:11:18.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

