module.exports = async function (context, req) {
  const date = "2023-08-20T11:06:08.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

