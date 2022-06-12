module.exports = async function (context, req) {
  const date = "2022-06-12T12:16:30.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

