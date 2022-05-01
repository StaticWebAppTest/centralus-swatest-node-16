module.exports = async function (context, req) {
  const date = "2022-05-01T06:13:21.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

