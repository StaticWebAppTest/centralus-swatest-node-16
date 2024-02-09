module.exports = async function (context, req) {
  const date = "2024-02-09T18:11:07.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

