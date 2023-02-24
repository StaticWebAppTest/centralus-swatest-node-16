module.exports = async function (context, req) {
  const date = "2023-02-24T05:09:45.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

