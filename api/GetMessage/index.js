module.exports = async function (context, req) {
  const date = "2023-11-08T13:11:16.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

