module.exports = async function (context, req) {
  const date = "2024-03-30T17:07:13.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

