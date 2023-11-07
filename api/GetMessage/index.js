module.exports = async function (context, req) {
  const date = "2023-11-07T07:08:15.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

