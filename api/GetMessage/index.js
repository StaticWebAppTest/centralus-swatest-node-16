module.exports = async function (context, req) {
  const date = "2023-02-09T14:09:24.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

