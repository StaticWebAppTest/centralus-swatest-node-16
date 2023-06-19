module.exports = async function (context, req) {
  const date = "2023-06-19T16:11:13.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

