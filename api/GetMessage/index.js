module.exports = async function (context, req) {
  const date = "2023-09-17T14:06:52.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

