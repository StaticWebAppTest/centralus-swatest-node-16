module.exports = async function (context, req) {
  const date = "2024-03-27T23:08:52.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

