module.exports = async function (context, req) {
  const date = "2023-09-27T12:16:46.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

