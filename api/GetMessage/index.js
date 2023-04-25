module.exports = async function (context, req) {
  const date = "2023-04-25T20:09:13.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

