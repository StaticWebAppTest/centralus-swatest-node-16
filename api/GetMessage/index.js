module.exports = async function (context, req) {
  const date = "2022-10-18T23:16:12.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

