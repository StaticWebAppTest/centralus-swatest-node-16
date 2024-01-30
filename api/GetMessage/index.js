module.exports = async function (context, req) {
  const date = "2024-01-30T17:09:19.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

