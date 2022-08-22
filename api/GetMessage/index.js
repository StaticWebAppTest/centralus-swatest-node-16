module.exports = async function (context, req) {
  const date = "2022-08-22T09:11:08.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

