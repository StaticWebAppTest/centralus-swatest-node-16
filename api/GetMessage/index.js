module.exports = async function (context, req) {
  const date = "2024-01-04T03:10:15.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

