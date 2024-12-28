module.exports = async function (context, req) {
  const date = "2024-12-28T23:10:53.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

