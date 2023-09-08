module.exports = async function (context, req) {
  const date = "2023-09-08T07:08:30.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

