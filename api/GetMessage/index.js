module.exports = async function (context, req) {
  const date = "2023-09-08T13:10:57.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

