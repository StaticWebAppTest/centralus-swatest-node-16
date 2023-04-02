module.exports = async function (context, req) {
  const date = "2023-04-02T00:50:54.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

