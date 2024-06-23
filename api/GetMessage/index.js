module.exports = async function (context, req) {
  const date = "2024-06-23T16:11:18.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

