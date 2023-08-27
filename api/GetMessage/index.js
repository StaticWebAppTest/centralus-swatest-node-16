module.exports = async function (context, req) {
  const date = "2023-08-27T09:07:32.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

