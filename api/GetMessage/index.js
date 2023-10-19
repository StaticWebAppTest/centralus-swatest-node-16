module.exports = async function (context, req) {
  const date = "2023-10-19T00:40:57.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

