module.exports = async function (context, req) {
  const date = "2022-04-20T12:19:50.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

