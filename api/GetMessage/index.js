module.exports = async function (context, req) {
  const date = "2022-07-01T06:14:40.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

