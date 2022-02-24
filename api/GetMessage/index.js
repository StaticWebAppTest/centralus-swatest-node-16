module.exports = async function (context, req) {
  const date = "2022-02-24T05:09:15.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

