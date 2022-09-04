module.exports = async function (context, req) {
  const date = "2022-09-04T09:10:49.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

