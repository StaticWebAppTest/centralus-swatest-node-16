module.exports = async function (context, req) {
  const date = "2023-12-28T13:10:14.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

