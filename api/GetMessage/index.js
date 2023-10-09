module.exports = async function (context, req) {
  const date = "2023-10-09T06:12:44.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

