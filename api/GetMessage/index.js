module.exports = async function (context, req) {
  const date = "2024-10-23T14:11:35.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

