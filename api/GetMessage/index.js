module.exports = async function (context, req) {
  const date = "2023-07-30T20:08:25.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

