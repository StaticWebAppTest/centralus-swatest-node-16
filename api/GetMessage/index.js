module.exports = async function (context, req) {
  const date = "2023-07-02T13:13:33.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

