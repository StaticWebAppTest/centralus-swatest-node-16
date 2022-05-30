module.exports = async function (context, req) {
  const date = "2022-05-30T21:10:21.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

