module.exports = async function (context, req) {
  const date = "2022-10-24T07:44:10.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

