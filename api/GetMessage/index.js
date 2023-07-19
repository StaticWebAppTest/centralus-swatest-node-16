module.exports = async function (context, req) {
  const date = "2023-07-19T10:09:24.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

