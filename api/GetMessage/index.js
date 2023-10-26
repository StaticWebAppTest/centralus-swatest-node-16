module.exports = async function (context, req) {
  const date = "2023-10-26T18:11:26.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

