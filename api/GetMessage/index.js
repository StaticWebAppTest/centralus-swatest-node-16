module.exports = async function (context, req) {
  const date = "2023-02-15T07:09:20.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

