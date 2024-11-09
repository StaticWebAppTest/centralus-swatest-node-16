module.exports = async function (context, req) {
  const date = "2024-11-09T07:09:54.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

