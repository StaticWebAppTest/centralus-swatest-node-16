module.exports = async function (context, req) {
  const date = "2022-11-04T14:09:42.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

