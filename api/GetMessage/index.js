module.exports = async function (context, req) {
  const date = "2024-08-12T05:11:37.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

