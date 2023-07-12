module.exports = async function (context, req) {
  const date = "2023-07-12T03:19:24.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

