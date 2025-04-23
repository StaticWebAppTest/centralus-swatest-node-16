module.exports = async function (context, req) {
  const date = "2025-04-23T11:11:26.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

