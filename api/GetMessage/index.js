module.exports = async function (context, req) {
  const date = "2023-10-15T21:07:08.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

