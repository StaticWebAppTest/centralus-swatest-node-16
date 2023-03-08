module.exports = async function (context, req) {
  const date = "2023-03-08T18:13:14.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

