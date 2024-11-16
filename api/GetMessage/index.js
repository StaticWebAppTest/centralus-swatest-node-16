module.exports = async function (context, req) {
  const date = "2024-11-16T09:11:16.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

