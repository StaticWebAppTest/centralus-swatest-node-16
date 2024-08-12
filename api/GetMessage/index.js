module.exports = async function (context, req) {
  const date = "2024-08-12T18:15:19.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

