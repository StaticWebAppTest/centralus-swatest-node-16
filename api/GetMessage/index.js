module.exports = async function (context, req) {
  const date = "2023-12-20T11:06:44.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

