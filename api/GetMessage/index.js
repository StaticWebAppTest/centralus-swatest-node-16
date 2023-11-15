module.exports = async function (context, req) {
  const date = "2023-11-15T09:09:48.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

