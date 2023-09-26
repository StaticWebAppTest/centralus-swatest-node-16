module.exports = async function (context, req) {
  const date = "2023-09-26T09:09:15.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

