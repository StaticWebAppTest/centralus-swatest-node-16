module.exports = async function (context, req) {
  const date = "2024-10-08T19:08:25.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

