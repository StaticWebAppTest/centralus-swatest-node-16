module.exports = async function (context, req) {
  const date = "2023-09-27T23:08:27.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

