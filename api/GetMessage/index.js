module.exports = async function (context, req) {
  const date = "2023-05-14T05:08:10.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

