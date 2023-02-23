module.exports = async function (context, req) {
  const date = "2023-02-23T12:20:29.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

