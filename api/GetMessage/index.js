module.exports = async function (context, req) {
  const date = "2022-04-21T11:09:43.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

