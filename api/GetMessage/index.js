module.exports = async function (context, req) {
  const date = "2024-02-26T18:11:08.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

