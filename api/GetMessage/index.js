module.exports = async function (context, req) {
  const date = "2023-10-06T18:11:38.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

