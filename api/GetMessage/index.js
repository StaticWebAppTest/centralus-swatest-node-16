module.exports = async function (context, req) {
  const date = "2023-05-11T02:31:56.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

