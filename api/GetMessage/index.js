module.exports = async function (context, req) {
  const date = "2022-06-18T14:09:10.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

