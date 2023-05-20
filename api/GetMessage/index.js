module.exports = async function (context, req) {
  const date = "2023-05-20T14:08:03.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

