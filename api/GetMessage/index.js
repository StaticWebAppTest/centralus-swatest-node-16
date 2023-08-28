module.exports = async function (context, req) {
  const date = "2023-08-28T06:11:47.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

