module.exports = async function (context, req) {
  const date = "2022-04-10T07:10:07.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

