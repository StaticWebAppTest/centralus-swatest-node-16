module.exports = async function (context, req) {
  const date = "2023-04-02T17:07:13.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

