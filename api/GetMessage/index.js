module.exports = async function (context, req) {
  const date = "2022-06-12T08:12:10.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

