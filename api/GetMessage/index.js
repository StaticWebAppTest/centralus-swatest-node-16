module.exports = async function (context, req) {
  const date = "2022-03-14T23:10:52.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

