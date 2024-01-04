module.exports = async function (context, req) {
  const date = "2024-01-04T14:08:40.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

