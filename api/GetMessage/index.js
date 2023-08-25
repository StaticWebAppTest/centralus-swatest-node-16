module.exports = async function (context, req) {
  const date = "2023-08-25T10:08:57.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

