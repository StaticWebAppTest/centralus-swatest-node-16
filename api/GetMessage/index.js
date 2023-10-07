module.exports = async function (context, req) {
  const date = "2023-10-07T16:09:44.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

