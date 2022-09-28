module.exports = async function (context, req) {
  const date = "2022-09-28T18:21:18.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

