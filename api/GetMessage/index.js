module.exports = async function (context, req) {
  const date = "2022-12-04T06:11:44.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

