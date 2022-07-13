module.exports = async function (context, req) {
  const date = "2022-07-13T15:11:14.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

