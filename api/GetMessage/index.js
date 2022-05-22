module.exports = async function (context, req) {
  const date = "2022-05-22T11:09:19.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

