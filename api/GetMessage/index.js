module.exports = async function (context, req) {
  const date = "2022-03-18T14:09:22.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

