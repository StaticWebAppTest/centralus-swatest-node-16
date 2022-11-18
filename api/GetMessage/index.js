module.exports = async function (context, req) {
  const date = "2022-11-18T17:11:07.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

