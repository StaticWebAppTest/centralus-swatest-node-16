module.exports = async function (context, req) {
  const date = "2023-02-12T11:07:39.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

