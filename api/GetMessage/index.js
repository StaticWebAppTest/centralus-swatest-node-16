module.exports = async function (context, req) {
  const date = "2023-09-02T12:14:03.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

