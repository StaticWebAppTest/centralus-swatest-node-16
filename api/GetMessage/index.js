module.exports = async function (context, req) {
  const date = "2023-05-06T22:07:21.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

