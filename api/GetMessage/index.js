module.exports = async function (context, req) {
  const date = "2022-10-07T09:16:58.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

