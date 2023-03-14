module.exports = async function (context, req) {
  const date = "2023-03-14T21:08:39.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

