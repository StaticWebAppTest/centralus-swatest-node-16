module.exports = async function (context, req) {
  const date = "2023-09-08T22:07:50.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

