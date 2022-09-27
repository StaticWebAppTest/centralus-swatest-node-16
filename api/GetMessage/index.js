module.exports = async function (context, req) {
  const date = "2022-09-27T21:11:43.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

