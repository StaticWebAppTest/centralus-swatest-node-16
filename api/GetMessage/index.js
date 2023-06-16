module.exports = async function (context, req) {
  const date = "2023-06-16T13:11:39.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

