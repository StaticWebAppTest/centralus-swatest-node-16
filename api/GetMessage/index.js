module.exports = async function (context, req) {
  const date = "2022-10-20T12:28:04.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

