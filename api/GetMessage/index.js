module.exports = async function (context, req) {
  const date = "2024-06-03T09:11:06.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

