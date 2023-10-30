module.exports = async function (context, req) {
  const date = "2023-10-30T15:09:20.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

