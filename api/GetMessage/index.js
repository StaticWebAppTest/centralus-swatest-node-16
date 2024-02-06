module.exports = async function (context, req) {
  const date = "2024-02-06T11:07:52.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

