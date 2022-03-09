module.exports = async function (context, req) {
  const date = "2022-03-09T07:09:49.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

