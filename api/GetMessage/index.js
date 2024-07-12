module.exports = async function (context, req) {
  const date = "2024-07-12T05:10:20.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

