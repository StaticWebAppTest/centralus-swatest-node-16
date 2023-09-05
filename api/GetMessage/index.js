module.exports = async function (context, req) {
  const date = "2023-09-05T12:16:19.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

