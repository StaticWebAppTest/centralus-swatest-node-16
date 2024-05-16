module.exports = async function (context, req) {
  const date = "2024-05-16T09:09:16.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

