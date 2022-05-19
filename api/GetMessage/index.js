module.exports = async function (context, req) {
  const date = "2022-05-19T20:12:10.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

