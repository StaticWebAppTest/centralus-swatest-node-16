module.exports = async function (context, req) {
  const date = "2022-03-28T07:10:31.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

