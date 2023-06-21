module.exports = async function (context, req) {
  const date = "2023-06-21T18:10:56.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

