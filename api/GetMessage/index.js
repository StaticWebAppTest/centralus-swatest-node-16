module.exports = async function (context, req) {
  const date = "2023-09-20T15:09:11.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

