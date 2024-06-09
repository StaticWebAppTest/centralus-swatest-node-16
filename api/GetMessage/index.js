module.exports = async function (context, req) {
  const date = "2024-06-09T07:09:57.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

