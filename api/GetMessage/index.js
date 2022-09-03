module.exports = async function (context, req) {
  const date = "2022-09-03T11:09:10.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

