module.exports = async function (context, req) {
  const date = "2022-03-30T07:11:09.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

