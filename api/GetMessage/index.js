module.exports = async function (context, req) {
  const date = "2023-03-09T03:18:19.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

