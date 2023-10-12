module.exports = async function (context, req) {
  const date = "2023-10-12T07:08:43.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

