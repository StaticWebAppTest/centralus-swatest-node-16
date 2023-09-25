module.exports = async function (context, req) {
  const date = "2023-09-25T21:07:38.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

