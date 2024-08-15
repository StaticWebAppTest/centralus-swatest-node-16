module.exports = async function (context, req) {
  const date = "2024-08-15T09:11:20.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

