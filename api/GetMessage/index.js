module.exports = async function (context, req) {
  const date = "2025-03-23T14:10:08.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

