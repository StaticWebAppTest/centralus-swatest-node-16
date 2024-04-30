module.exports = async function (context, req) {
  const date = "2024-04-30T22:09:30.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

