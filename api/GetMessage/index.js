module.exports = async function (context, req) {
  const date = "2022-06-14T09:10:58.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

