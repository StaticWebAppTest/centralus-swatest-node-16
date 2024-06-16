module.exports = async function (context, req) {
  const date = "2024-06-16T03:11:13.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

