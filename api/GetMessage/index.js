module.exports = async function (context, req) {
  const date = "2024-11-26T09:13:32.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

