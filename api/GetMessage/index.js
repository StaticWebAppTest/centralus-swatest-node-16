module.exports = async function (context, req) {
  const date = "2024-10-26T09:11:10.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

