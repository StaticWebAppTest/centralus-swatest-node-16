module.exports = async function (context, req) {
  const date = "2024-02-08T13:09:13.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

