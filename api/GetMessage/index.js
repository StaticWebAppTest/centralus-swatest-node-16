module.exports = async function (context, req) {
  const date = "2023-03-18T07:08:10.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

