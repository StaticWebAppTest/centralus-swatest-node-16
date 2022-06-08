module.exports = async function (context, req) {
  const date = "2022-06-08T18:12:45.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

