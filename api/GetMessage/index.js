module.exports = async function (context, req) {
  const date = "2023-06-20T13:12:09.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

