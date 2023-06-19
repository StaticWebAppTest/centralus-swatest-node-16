module.exports = async function (context, req) {
  const date = "2023-06-19T00:54:02.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

