module.exports = async function (context, req) {
  const date = "2024-10-08T18:15:42.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

