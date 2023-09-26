module.exports = async function (context, req) {
  const date = "2023-09-26T18:11:31.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

