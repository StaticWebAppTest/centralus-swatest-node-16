module.exports = async function (context, req) {
  const date = "2023-01-08T07:07:53.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

