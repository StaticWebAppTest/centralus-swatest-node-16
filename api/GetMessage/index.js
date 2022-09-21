module.exports = async function (context, req) {
  const date = "2022-09-21T14:23:17.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

