module.exports = async function (context, req) {
  const date = "2024-05-06T14:09:54.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

