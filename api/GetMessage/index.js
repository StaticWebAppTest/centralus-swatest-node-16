module.exports = async function (context, req) {
  const date = "2022-04-10T08:12:15.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

