module.exports = async function (context, req) {
  const date = "2024-02-19T05:09:31.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

