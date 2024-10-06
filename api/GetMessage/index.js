module.exports = async function (context, req) {
  const date = "2024-10-06T16:12:52.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

