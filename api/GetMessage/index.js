module.exports = async function (context, req) {
  const date = "2022-10-27T11:10:30.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

