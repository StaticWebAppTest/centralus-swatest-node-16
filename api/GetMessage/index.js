module.exports = async function (context, req) {
  const date = "2023-08-28T22:07:47.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

