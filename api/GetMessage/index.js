module.exports = async function (context, req) {
  const date = "2024-01-14T10:09:09.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

