module.exports = async function (context, req) {
  const date = "2024-12-07T11:09:40.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

