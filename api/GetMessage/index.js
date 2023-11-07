module.exports = async function (context, req) {
  const date = "2023-11-07T14:08:22.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

