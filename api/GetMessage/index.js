module.exports = async function (context, req) {
  const date = "2022-04-16T09:10:01.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

