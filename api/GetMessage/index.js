module.exports = async function (context, req) {
  const date = "2022-03-02T05:09:10.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

