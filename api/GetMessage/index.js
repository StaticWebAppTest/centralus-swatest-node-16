module.exports = async function (context, req) {
  const date = "2023-08-09T13:13:21.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

