module.exports = async function (context, req) {
  const date = "2024-05-28T07:10:24.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

