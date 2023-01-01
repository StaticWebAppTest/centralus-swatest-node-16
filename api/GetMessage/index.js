module.exports = async function (context, req) {
  const date = "2023-01-01T06:11:28.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

