module.exports = async function (context, req) {
  const date = "2022-03-18T18:12:09.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

