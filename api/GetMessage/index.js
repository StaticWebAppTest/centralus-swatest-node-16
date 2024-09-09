module.exports = async function (context, req) {
  const date = "2024-09-09T17:09:45.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

