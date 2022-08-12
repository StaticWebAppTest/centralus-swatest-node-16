module.exports = async function (context, req) {
  const date = "2022-08-12T17:19:07.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

