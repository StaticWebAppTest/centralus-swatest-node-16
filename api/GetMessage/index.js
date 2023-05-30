module.exports = async function (context, req) {
  const date = "2023-05-30T23:08:32.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

