module.exports = async function (context, req) {
  const date = "2022-06-21T07:09:30.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

