module.exports = async function (context, req) {
  const date = "2024-10-12T05:11:27.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

