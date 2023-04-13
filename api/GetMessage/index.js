module.exports = async function (context, req) {
  const date = "2023-04-13T15:09:14.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

