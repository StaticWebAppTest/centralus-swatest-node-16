module.exports = async function (context, req) {
  const date = "2024-09-24T18:15:20.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

