module.exports = async function (context, req) {
  const date = "2023-10-02T09:09:31.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

