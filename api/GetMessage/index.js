module.exports = async function (context, req) {
  const date = "2022-03-25T18:12:43.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

