module.exports = async function (context, req) {
  const date = "2023-04-02T18:09:40.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

