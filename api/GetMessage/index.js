module.exports = async function (context, req) {
  const date = "2022-12-12T10:11:10.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

