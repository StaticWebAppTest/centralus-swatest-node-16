module.exports = async function (context, req) {
  const date = "2024-06-09T00:52:01.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

