module.exports = async function (context, req) {
  const date = "2023-03-24T18:11:45.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

