module.exports = async function (context, req) {
  const date = "2023-08-04T15:08:44.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

