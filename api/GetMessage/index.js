module.exports = async function (context, req) {
  const date = "2023-06-16T08:11:01.588Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

