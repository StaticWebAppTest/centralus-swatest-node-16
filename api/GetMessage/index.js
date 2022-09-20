module.exports = async function (context, req) {
  const date = "2022-09-20T11:10:30.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

