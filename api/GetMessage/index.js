module.exports = async function (context, req) {
  const date = "2022-03-26T17:10:09.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

