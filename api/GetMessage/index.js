module.exports = async function (context, req) {
  const date = "2023-10-30T01:45:07.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

