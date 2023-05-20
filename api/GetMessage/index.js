module.exports = async function (context, req) {
  const date = "2023-05-20T21:07:08.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

