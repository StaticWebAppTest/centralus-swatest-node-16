module.exports = async function (context, req) {
  const date = "2023-05-09T07:08:21.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

