module.exports = async function (context, req) {
  const date = "2023-10-17T01:44:30.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

