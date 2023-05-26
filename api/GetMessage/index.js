module.exports = async function (context, req) {
  const date = "2023-05-26T06:11:26.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

