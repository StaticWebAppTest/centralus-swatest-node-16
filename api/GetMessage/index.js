module.exports = async function (context, req) {
  const date = "2023-08-01T11:07:21.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

