module.exports = async function (context, req) {
  const date = "2022-06-24T16:14:18.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

