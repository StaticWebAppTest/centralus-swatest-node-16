module.exports = async function (context, req) {
  const date = "2022-09-03T06:13:30.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

