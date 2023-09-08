module.exports = async function (context, req) {
  const date = "2023-09-08T08:11:08.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

