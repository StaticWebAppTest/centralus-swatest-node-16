module.exports = async function (context, req) {
  const date = "2023-05-26T05:08:20.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

