module.exports = async function (context, req) {
  const date = "2023-05-16T10:09:12.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

