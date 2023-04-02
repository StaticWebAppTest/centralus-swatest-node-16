module.exports = async function (context, req) {
  const date = "2023-04-02T11:06:37.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

