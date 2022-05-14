module.exports = async function (context, req) {
  const date = "2022-05-14T23:11:18.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

