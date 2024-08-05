module.exports = async function (context, req) {
  const date = "2024-08-05T15:11:09.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

