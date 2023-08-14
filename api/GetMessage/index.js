module.exports = async function (context, req) {
  const date = "2023-08-14T17:07:35.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

