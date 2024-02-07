module.exports = async function (context, req) {
  const date = "2024-02-07T05:09:20.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

