module.exports = async function (context, req) {
  const date = "2023-07-02T10:09:10.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

