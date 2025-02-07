module.exports = async function (context, req) {
  const date = "2025-02-07T14:11:03.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

