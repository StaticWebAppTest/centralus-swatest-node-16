module.exports = async function (context, req) {
  const date = "2024-02-04T16:09:57.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

