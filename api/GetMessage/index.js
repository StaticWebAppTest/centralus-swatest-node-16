module.exports = async function (context, req) {
  const date = "2023-12-31T06:11:21.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

