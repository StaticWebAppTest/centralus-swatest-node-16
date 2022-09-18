module.exports = async function (context, req) {
  const date = "2022-09-18T11:10:12.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

