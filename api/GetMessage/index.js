module.exports = async function (context, req) {
  const date = "2023-09-02T04:09:56.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

