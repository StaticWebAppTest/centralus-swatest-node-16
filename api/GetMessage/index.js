module.exports = async function (context, req) {
  const date = "2023-09-03T12:14:14.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

