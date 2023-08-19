module.exports = async function (context, req) {
  const date = "2023-08-19T18:09:05.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

