module.exports = async function (context, req) {
  const date = "2023-02-10T15:10:16.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

