module.exports = async function (context, req) {
  const date = "2023-06-23T07:09:43.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

