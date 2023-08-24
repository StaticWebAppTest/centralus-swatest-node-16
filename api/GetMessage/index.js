module.exports = async function (context, req) {
  const date = "2023-08-24T07:07:51.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

