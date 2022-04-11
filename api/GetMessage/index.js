module.exports = async function (context, req) {
  const date = "2022-04-11T12:18:40.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

