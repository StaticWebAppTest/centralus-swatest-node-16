module.exports = async function (context, req) {
  const date = "2022-05-08T05:10:30.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

