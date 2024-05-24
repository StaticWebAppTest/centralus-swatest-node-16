module.exports = async function (context, req) {
  const date = "2024-05-24T11:10:01.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

